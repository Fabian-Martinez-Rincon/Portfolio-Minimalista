import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Portfolio2021">
      <Container>
        <Title>
            Portfolio-2021 <Badge>2021</Badge>
        </Title>
        <P>
          Esta web fue un año despues del primer portfolio, aprendi a utilizar particulas, a usar filtros para 
          elementos y como estructurar una web en general.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html, Css y Javascript, react</span>
          </ListItem>
          <ListItem>
            <Meta>Presentation</Meta>
            <Link href="https://fabian-martinez1.github.io/">
              website <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Repositorio</Meta>
            <Link href="https://github.com/Fabian-Martinez1/Fabian-Martinez1.github.io">
              Respositorio con los archivos{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Preview</Center>
        </Heading>
  
    
  
  
  
        <WorkImage
          src="https://user-images.githubusercontent.com/55964635/207118809-6e9d0c90-c79c-47e9-90a7-3d82f5c7c55a.png"
          alt="fablog"
        />
        <WorkImage
          src="https://user-images.githubusercontent.com/55964635/207119220-89ce8d17-125e-4ac5-b4e9-a1a14695ddc0.png"
          alt="fablog"
        />
        <WorkImage
          src="https://user-images.githubusercontent.com/55964635/207119463-765c869b-1ed0-41aa-8ffa-09dc236426fa.png"
          alt="fablog"
        />
        <WorkImage
          src="https://user-images.githubusercontent.com/55964635/207119959-b23a70fc-8bd5-4872-8f16-7db5f66ac835.png"
          alt="fablog"
        />
        <WorkImage
          src="https://user-images.githubusercontent.com/55964635/207120242-60ba46ff-9b86-48a4-a8f1-e139cd540d0f.png"
          alt="fablog"
        />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  