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
    <Layout title="Galleriix">
      <Container>
        <Title>
          Galleriix <Badge>2023</Badge>
        </Title>
        <P>
          Queria tener un espacio para mostrar los logos que fui haciendo
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Galleriix</Meta>
            <Link href="https://galleriix-frontend.vercel.app/">
              Web{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Galleriix-Frontend">
              Front-End{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/NomaDiix/Galleriix-Backend">
              Back-End{' '}
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
        <WorkImage src="https://user-images.githubusercontent.com/55964635/211101622-5a4783f5-8d86-42b6-86b6-0c9704e68c1b.png" alt="walknote" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  