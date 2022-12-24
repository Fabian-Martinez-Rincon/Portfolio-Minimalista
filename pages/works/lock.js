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
    <Layout title="Lock 🔒">
      <Container>
        <Title>
            Lock 🔒 <Badge>2020</Badge>
        </Title>
        <P>
        En este informe veremos tanto la simulación del circuito 
        como la programación real de una caja fuerte. 
        A continuación, veremos los diagramas de flujo general e individual.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Arduino</span>
          </ListItem>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://nomadiix.github.io/Lock/">
              Keypad
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Lock">Github</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage src="https://user-images.githubusercontent.com/55964635/207170381-c5792e5a-3acd-4cba-a574-58849dda7a8d.png" alt="amembo" />
        <WorkImage src="https://user-images.githubusercontent.com/55964635/207170401-6a305d7a-6251-4055-b106-82134c9de803.png" alt="amembo" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  