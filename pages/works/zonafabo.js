import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Zona Fabo">
    <Container>
      <Title>
        Zona Fabo <Badge>2021</Badge>
      </Title>
      <P>
        El objetivo de esta pagina es poder tener los repositorios que iba haciendo
        sobre las materias, la web quedo un poco obsoleta pero esta bueno para ver mi 
        evolución.
      </P>

      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Html / Css / Javascript
          </span>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <span>
            <Link href="https://github.com/El-vertedero-de-Fabo/ZonaFabo.github.io" target="_blank">
              Github<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Web</Meta>
          <span>
            <Link href="https://el-vertedero-de-fabo.github.io/ZonaFabo.github.io/" target="_blank">
              ZonaFabo<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/207148263-640badde-7ae9-4efb-9ef8-10ad8c45789b.png" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

