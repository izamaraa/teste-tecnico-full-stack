## testebackend

1. Instalando...

Em seu terminal digite o seguinte comando abaixo para clonar o repositório :

    ** git clone git@github.com:izamaraa/teste-tecnico-full-stack.git **

Após o clone, e com projeto já sendo executado em sua máquina utilize os
seguintes comandos:

    pip install -r requirements.txt

    python manage.py makemigrations

    python manage.py migrate

ou:

pip install -r requirements.txt

    ./manage.py makemigrations

    ./manage.py migrate

Em seguida rodar o servidor :

    python manage.py runserver

ou :

    ./manage.py runserver

1. Rotas Client ...

-Criar uma conta :
http://localhost:5001/client

-logar conta
http://localhost:5001/client/login

Obs: Retorna um token para editar ou deletar conta propria.

-Listar todas contas :
http://localhost:5001/clients

-Deletar conta :
http://localhost:5001/client/{id cliente}

- Bearer token

-Editar conta :
http://localhost:5001/client/{id cliente}

- Bearer token

2- Rotas contacts ...

-Criar uma contato :
http://localhost:5001/client/contact
+Bearer token client

-Listar contatos :
http://localhost:5001/client/contacts
+Bearer token client

-Deletar contato :
http://localhost:5001/client/delete/contact/{id contact}

- Bearer token client

-Editar contato :
http://localhost:5001/client/update/contact/{id contact}

- Bearer token client

3- Corpo das Requisições

entrada:
