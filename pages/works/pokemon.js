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
    <Layout title="Transform-Pokemon-Resolution">
      <Container>
        <Title>
        🎮Transform-Pokemon-Resolution <Badge>2020</Badge>
        </Title>
        <P>
        Se trata de una herramienta capaz de reenfocar Pokémon que están 
        demasiado desenfocados utilizando la arquitectura pix2pix.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, jupyter notebook</span>
          </ListItem>
          <ListItem>
            <Meta>Web</Meta>
            <Link href="https://fabian-martinez1.github.io/Transform-Pokemon-Resolution/">
              Pokemon
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/Fabian-Martinez1/Transform-Pokemon-Resolution">Github</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <WorkImage src="https://user-images.githubusercontent.com/55964635/207167242-367567b4-eded-42f2-b7b2-87f848bd002e.png" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  