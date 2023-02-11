#!/usr/bin/env bash
contador=0

while :
do 
    echo $contador
    contador=$((contador + 1))

    if [ $contador == 11 ]; then
        echo -e "\nCiclo finalizado"
        break
    fi
    
done 