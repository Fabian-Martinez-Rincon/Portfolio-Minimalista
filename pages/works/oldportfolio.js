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
  <Layout title="Portfolio2020">
    <Container>
      <Title>
        Portfolio2020 <Badge>2020</Badge>
      </Title>
      <P>
        Fue de mis primeros proyectos, es por eso que dentro cuenta con proyectos viejos
        ya que no lo fui actualizando para tenerlo como recuerdo. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, Css y Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://fabian-martinez1.github.io/Old_Portfolio/">
            website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://github.com/Fabian-Martinez1/Old_Portfolio">
            Respositorio con los archivos{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

  



      <WorkImage
        src="https://user-images.githubusercontent.com/55964635/207106881-4766035a-05dc-4492-b38e-07ca937b8e37.png"
        alt="fablog"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
