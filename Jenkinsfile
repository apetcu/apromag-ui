def branchName = env.BRANCH_NAME;
def uploadCredentialsId = 'apromag';

node {
    try {
        if (branchName == 'master') {
            stage ('Cleanup workspace') {
                cleanWs();
            }

            stage('Checkout') {
                checkout([$class: 'GitSCM', branches: [[name: branchName]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '22790bc7-f861-4ed2-9ca3-6fbe884904b6', url: 'https://sovezea.go.ro/gitlab/apromag/apromag-api.git']]]);
                commitMessage = sh(returnStdout: true, script: 'git show -s --format=format:"*%s* by %an" HEAD').trim();
            }

            stage('Install Dependencies') {
                sh "node -v"
                sh "npm -v"
                sh "npm install"
            }

            stage('Build UI') {
                sh "npm run build:prod"
            }

            stage('Deploy UI') {
                sh "ls -laG ./dist/apromag-ui"
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
