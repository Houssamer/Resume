pipeline {

    agent any

    stages {


        stage("build") {

            steps {
                nodejs("node") {
                    sh "npm install"
                    sh "npm build"
                }
            }
        }


        stage("deploy") {

            steps {
                sh "docker build ."
            }
        }
        
    }
}