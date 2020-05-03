def branchName = env.BRANCH_NAME;
def uploadCredentialsId = 'apromag';

node {
    try {
        if (branchName == 'master') {
            stage ('Cleanup workspace') {
                cleanWs();
            }

            stage('Checkout') {
                checkout([$class: 'GitSCM', branches: [[name: branchName]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '22790bc7-f861-4ed2-9ca3-6fbe884904b6', url: 'https://sovezea.go.ro/gitea/apromag/apromag-ui.git']]]);
                commitMessage = sh(returnStdout: true, script: 'git show -s --format=format:"*%s* by %an" HEAD').trim();
            }

            stage('Install front-end dependencies') {
                nodejs('NodeJS') {
                    sh "npm i"
                }
            }

            stage('Build front-end') {
                nodejs('NodeJS') {
                    sh "npm run build:prod"
                    sh "ls -laG ./dist/apromag-ui"
                }
            }

            stage('Deploy front-end') {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'apromag',
                                transfers: [sshTransfer(
                                    sourceFiles: 'dist/apromag-ui/**/*.*',
                                    remoteDirectory: '/var/www/html',
                                    cleanRemote: false,
                                    excludes: '',
                                    execTimeout: 120000,
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    patternSeparator: '[, ]+',
                                    remoteDirectorySDF: false,
                                    removePrefix: 'dist/apromag-ui')
                                ], usePromotionTimestamp: false,
                                useWorkspaceInPromotion: false,
                                verbose: false
                            )
                        ]
                    )
            }

            stage('Upload') {
                ftpPublisher alwaysPublishFromMaster: true, continueOnError: false, failOnError: false, publishers: [
                    [configName: 'apromag-ftp', transfers: [
                        [asciiMode: false,
                        sourceFiles: 'dist/apromag-ui/**/*.*',
                        cleanRemote: false,
                        excludes: '',
                        execTimeout: 120000,
                        flatten: false,
                        makeEmptyDirs: false,
                        noDefaultExcludes: false,
                        patternSeparator: '[, ]+',
                        remoteDirectory: "/",
                        remoteDirectorySDF: false,
                        removePrefix: 'dist/apromag-ui',
                        ]
                    ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                ]
            }
        } else {
            stage('Skip build for branch ' + branchName) {
                echo 'Branch is not master. Skipping..  .'
            }
        }
    } catch (e) {
        print e;
    }
}
