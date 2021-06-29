cd ddsh_backend
./gradlew clean build
java -Dspring.profiles.active=local -jar ./build/libs/ddsh_backend-0.0.1.war 
