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
    <Layout title="Converter Oc">
      <Container>
        <Title>
        Converter Oc <Badge>2020</Badge>
        </Title>
        <P>
        Mientras estaba dando CADP se me ocurrio hacer eso para la materia
        OC (Organización de computadoras), y salio el siguiente proyecto.
        Es bastante humilde, ya que estaba aprendiendo a programar
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Pascal</span>
          </ListItem>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://nomadiix.github.io/Converter-OC/">
              Conterver oc
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Converter-OC">Github</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage src="https://user-images.githubusercontent.com/55964635/207167893-c45312e5-0598-4eb3-82b6-8f02a740c9fb.png" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  