import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Linktre">
      <Container>
        <Title>
          Linktree <Badge>2023</Badge>
        </Title>
        <P>
          Clone de linktree que basicamente contiene todos los links importantes
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Linktree</Meta>
            <Link href="https://linktree-fabian.vercel.app/">
              Web{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Linktree">
              Github{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Next js, Tailwind </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>
  
        <UnorderedList my={4}>
         
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
        </SimpleGrid>
        <WorkImage src="https://user-images.githubusercontent.com/55964635/211003908-e37395d8-0edd-413b-b172-533ffbe9d9f9.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  