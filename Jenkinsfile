pipeline {
    agent any

    environment {
        APP_NAME = "jenkins-frontend"
        IMAGE_NAME = "jenkins-frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sanjanaspp/my_web_app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "No tests yet - frontend build only"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop $APP_NAME || true
                docker rm $APP_NAME || true
                docker run -d -p 8080:80 --name $APP_NAME $IMAGE_NAME
                '''
            }
        }
    }
}
