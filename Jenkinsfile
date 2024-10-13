pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:focal'
            reuseNode true
        }
    }

    parameters {
        choice(name: 'ENV', choices: ['dev', 'stage', 'prod'], description: 'Выберите окружение для тестирования')
    }

    environment {
        ENVIRONMENT = "${params.ENV}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'git@github.com:RavewaveQQ/PW_Template.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npm run e2e --env=${ENVIRONMENT}'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/*.json', allowEmptyArchive: true
            junit 'test-results/*.xml'
        }
        cleanup {
            cleanWs()
        }
    }
}
