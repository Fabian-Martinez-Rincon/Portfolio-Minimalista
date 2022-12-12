import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/1.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/2.jpg'
import thumbFishWorkflow from '../public/images/contents/3.jpg'
import thumbMyDeskSetup from '../public/images/contents/4.jpg'
import thumb500PaidUsers from '../public/images/contents/5.jpg'
import thumbFinancialGoal from '../public/images/contents/6.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="GENERA CUALQUIER IMAGEN | Boludenado con DALL-E 2"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=qZIL8m2FI4s&t=5s"
          />
          <GridItem
            title="Proyectos en PROGRAMACION"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=d5u4DT3oH8E&t=19s"
          />
          <GridItem
            title="Libros de Programación para 2022"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=6xmOD4W_2Kc&t=6s"
          />
          <GridItem
            title="8 JUEGOS PARA PROGRAMAR 2022"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=DOAEoaSS6W8"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Aumentar Lógica en PROGRAMACIÓN"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/watch?v=64jPO_DxQEQ&t=4s"
          />
          <GridItem
            title="Dilemas en PROGRAMACION"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/watch?v=s_nf-m2KAPc&t=50s"
          />
        </SimpleGrid>
      </Section>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
