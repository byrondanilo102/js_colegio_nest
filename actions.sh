#!/bin/bash

opcion=0
linea=""

get_menu_opciones() {
    clear
    echo
    echo -e "\t\t---------- DEV ACTIONS ----------\n"
    
	echo -e "\t1. Build Project (npm run build)"
    echo -e "\t2. Start Project (npm run start)"
    echo -e "\t3. Start Watch Project (npm run start:dev)"
    
    echo -e "\n\t---------- OPEN APPPs ----------\n"
    echo -e "\t11. Open VS-Code IDE (code .)"
    echo -e "\t12. Open Sublime-Text IDE (sublime_text .)"

    echo -e "\n\t0. Salir\n\n"
    
    read -p "Escoja una Opcion: " opcion
}

exec_build() {
	clear	
    echo -e "----------- 1. Build Project (npm run build) -------------"
    echo
    
    npm run build
}  

exec_start() {
	clear	
    echo -e "----------- 2. Start Project (npm run start) -------------"
    echo
    
    npm run start
}

exec_start_watch() {
    clear   
    echo -e "----------- 3. Start Watch Project (npm run start:dev) -------------"
    echo
    
    npm run start:dev
}

open_vscode() {
    clear   
    echo -e "----------- 11. Open VS-Code IDE (code .) -------------"
    echo
    
    code .
}

open_sublime_text() {
    clear   
    echo -e "----------- 12. Open Sublime-Text IDE (sublime_text .) -------------"
    echo
    
    /opt/sublime_text/sublime_text .
}


while [ 1 ]
do

    get_menu_opciones

    case $opcion in
    
        0)
            clear;
            echo -e "Proceso terminado correctamente..."
            break ;;
            
        1)  exec_build ;;            
        2)  exec_start ;;          
        3)  exec_start_watch ;;

        11)  open_vscode ;;            
        12)  open_sublime_text ;; 
        
        *)  echo -e "Seleccion Incorrecta" ;;

    esac

echo -e "Presione la tecla Enter para continuar"
read linea

done