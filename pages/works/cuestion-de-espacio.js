import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cuestion de Espacio">
    <Container>
      <Title>
      👽 Cuestion de espacio <Badge>2022</Badge>
      </Title>
      <P>Proyecto hecho en la hackaton Space App. Tuve la oportunidad de trabajar con dos compañeros. Nos pudimos distribuir
        las tareas a corde a pesar de que eramos pocas personas en el grupo, pudimos exponer nuestro proyecto al final de
        tod y fue un buen fin de semana.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html. Css, Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Reto Elegido</Meta>
          <Link href="https://2022.spaceappschallenge.org/challenges/2022-challenges/space-biology-superhero/teams/cuestion-de-espacio/project">
            Nasa Internacional Space Apps Challenge <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentacion</Meta>
          <Link href="https://docs.google.com/presentation/d/1owJP8IoTKpZtDeG0UolIKm6VnmX1VBTz4oB3lYsBAMM/edit#slide=id.gcb9a0b074_1_0">
            Word <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Drive con la cartas</Meta>
          <Link href="https://drive.google.com/drive/folders/1X7Xbgo0IdRu6H7Q1ddaP2kjalD71kC7I">
            Cartas hechas <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repositorio</Meta>
          <Link href="https://github.com/Cuestion-de-Espacio">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Codigo</Meta>
          <Link href="https://github.com/Cuestion-de-Espacio/Frontend">
            Frontend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Codigo</Meta>
          <Link href="https://github.com/Cuestion-de-Espacio/Backend">
            Backend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
            <Badge mr={2}>Jugar una carta por turno</Badge>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Se juego con dos jugadores (modo duelo)</Badge>
        </ListItem>
        <ListItem>
            <Badge mr={2}>Al que gana en el duelo, se gana un rasgo</Badge>
        </ListItem>
      </UnorderedList>

      <WorkImage src="https://user-images.githubusercontent.com/55964635/193591347-2626e551-ec42-48f7-90e2-3d21f7bfc808.png" alt="mode.tokyo" />
      <WorkImage src="https://user-images.githubusercontent.com/55964635/193590554-320939f3-5eb3-405f-a62f-8e232464ed4f.png" alt="mode.tokyo" />

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="https://user-images.githubusercontent.com/55964635/193648922-55f0715a-cee0-47de-8141-6e652f1b28ea.png" alt="amembo" />
        <WorkImage src="https://user-images.githubusercontent.com/55964635/193649016-57cef9fa-cd3c-463c-9a2f-083bc7416175.png" alt="amembo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
