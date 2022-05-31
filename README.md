## RentX ##


# Cadastro de carros

**RF** => Requisitors funcionais
- Deve ser possível cadastrar um novo carro.


**RNF** => Requisitos não funcionais

**RN** => Regras de negócio
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado com disponibilidade true por padrão.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RNF** 

**RN** 
- O usuário não precisa estar logado no sistema.
  

# Cadastro de Especificação do carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.


**RNF** 


**RN** 
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagem do carro

**RF**
- Deve ser possível cadastrar as imagens do carro.

**RNF** 
- Utilizar o multer para upload dos arquivos

**RN** 
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.


# Alugeul de carro

**RF**
- Deve ser possível cadastrar um aluguel

**RNF** 

**RN** 
- O aluguel deve ter duração mínima de 24 hora.
- Não deve ser possível cadastrar um alguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um alguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.


# Devolução de carro

**RF**
- Deve ser possível realizar a devolução de um carro.

**RN** 
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


# Listagem de alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário.
    
**RN** 
- O usuário deve estar logado na aplicaçãoa.

# Recuperar senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
- O usuário deve conseguir inserir uma nova senha.
    
**RN** 
- O usuário precisa informar uma nova senha.
- O link enviado para a recuperação deve expirar em 3 horas.