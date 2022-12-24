import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Keypad ⌨️">
      <Container>
        <Title>
        Keypad ⌨️ <Badge>2020</Badge>
        </Title>
        <P>
        Este informe mostrará y describirá todo lo realizado por el alumno
         Fabián Martínez Rincón de la Escuela Técnica Albert Thomas número 6, 
         en el sector Arduino. Durante el período de prácticas aprenderemos el uso y
          funciones de las herramientas y módulos que nos brinda Arduino y cómo aprovecharlos a lo 
          largo de nuestros proyectos. Vamos a realizar un teclado en el que por medio de dos
           teclas nos permita subir y bajar en un abecedario y poder elegir letra por letra hasta
            enviar una frase por bluetooh a nuestro receptor que se encuentra en el lugar deseado 
            por el usuario.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Arduino</span>
          </ListItem>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://nomadiix.github.io/Keypad/">
              Keypad
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Keypad">Github</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage src="https://user-images.githubusercontent.com/55964635/207169411-b23334cf-84c1-4c37-b747-eab14445cbc7.png" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  