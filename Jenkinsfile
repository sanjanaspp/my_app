pipeline {
    agent any

    environment {
        APP_NAME = "jenkins-frontend"
        IMAGE_NAME = "jenkins-frontend:latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Test') {
            steps {
                bat 'echo No tests yet - frontend build only'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker stop %APP_NAME% || echo Container not running
                docker rm %APP_NAME% || echo Container not present
                docker run -d -p 3000:80 --name %APP_NAME% %IMAGE_NAME%
                '''
            }
        }
    }
}
