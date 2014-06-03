	echo off

	taskkill /f /im java.exe
	
rem keytool -genkey -alias <alias> -keystore <filename> -keypass <keypass> -dname <dname> -storepass <storepass> -validity <days>

keytool -genkey -alias myAlias10 -keystore myCert10 -keypass myKeyPass10 -dname "CN=FileApplet10" -storepass myStorePass10 -validity 1825


rem jarsigner -keystore <keystore_file> -keypass <keypass> -storepass <storepass> <jar_file> <alias>

jarsigner -keystore myCert10 -keypass myKeyPass10 -storepass myStorePass10 player.jar myAlias10

jarsigner -verify player.jar

