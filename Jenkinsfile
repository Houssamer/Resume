pipeline {

    agent any

    stages {


        stage("build") {

            steps {
                nodejs("node") {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }


        stage("deploy") {

            steps {
                sh "docker-compose up -d ."
            }
        }
        
    }
}