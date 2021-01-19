pipeline {
  environment {
     dockerRegistry = "dharmatkj/hallo-corona-fe"
     dockerRegistryCredential = 'dockerhub'
     dockerImage = ''
  }
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
	      git credentialsId: 'fe', url: 'git@github.com:igstbagusdharmaputra/hallo-corona-frontend.git'
      }
    }
//   stage('Build') {
//       steps {
 //        sh 'npm install'
  //     }
   // }
    //stage('Test') {
     // steps {
      //  echo 'test'
      //}
    //}
    //stage('Building image') {
     //  steps{
       //  script {
        //   dockerImage = docker.build dockerRegistry + ":latest"
         //}
       //}
     //}
    //stage('Upload Image') {
     //  steps{
      //   script {
       //    docker.withRegistry( '', dockerRegistryCredential ) {
        //     dockerImage.push()
         //  }
         //}
       //}
    // }
     //stage('Remove Unused docker image') {
      // steps{
       //  sh "docker rmi $dockerRegistry:latest"
       //}
     //}
     stage('Deploy App') {
        steps{
          sshagent(credentials: ['fe']){
             sh """ ssh devops@10.10.2.200  << EOF 
                cd /home/devops/hallo-corona-frontend
                docker-compose down
                git pull origin master
                docker rmi dharmatkj/hallo-corona-fe:latest
                docker-compose up -d
                exit
                EOF"""
          }
        }
     }
  }
}
