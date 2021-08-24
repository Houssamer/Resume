pipeline {

    agent any


    stages {


        stage("build") {
            sh "npm install"
            sh "npm build"
        }


        stage("deploy") {
            sh "docker build ."
        }
        
    }
}