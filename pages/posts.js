import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import LibrosDeProgramacion from '../public/images/contents/LibrosDeProgramacion.jpg'
import ProyectosModoDios from '../public/images/contents/ProyectosModoDios.jpg'
import PaginaWebNext13 from '../public/images/contents/PaginaWebNext13.jpg'
import AumentarLogicaEnProgramacion from '../public/images/contents/AumentarLogicaEnProgramacion.jpg'
import JuegosParaProgramar from '../public/images/contents/JuegosParaProgramar.jpg'
import BoludeandoDalle2 from '../public/images/contents/BoludeandoDalle2.jpg'
import Midjourneyv4 from '../public/images/contents/Midjourneyv4.jpg'
import ReadmeGithub from '../public/images/contents/ReadmeGithub.jpg'
import DilemasEnProgramacion from '../public/images/contents/DilemasEnProgramacion.jpg'
import GptCHATYSupabase from '../public/images/contents/GptCHATYSupabase.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
    <Section delay={0.1}>
      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Videos
      </Heading>
      <p>Tengo un canal de youtube en el que subo de vez en cuando temas 
      que se me hacen interesantes. Puede que algún dia me ponga serio, pero de momento
      estoy enfocado en mis estudios. Aca les dejo algunos</p>
      </Section>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Libros de Programación"
            thumbnail={LibrosDeProgramacion}
            href="https://www.youtube.com/watch?v=6xmOD4W_2Kc&t=7s"
          />
          <GridItem
            title="Proyectos Modo Dios"
            thumbnail={ProyectosModoDios}
            href="https://www.youtube.com/watch?v=d5u4DT3oH8E&t=23s"
          />
          <GridItem
            title="Pagina Web | Next js 13"
            thumbnail={PaginaWebNext13}
            href="https://www.youtube.com/watch?v=KB_tUK8yiSg"
          />
          <GridItem
            title="Aumentar Logica"
            thumbnail={AumentarLogicaEnProgramacion}
            href="https://www.youtube.com/watch?v=64jPO_DxQEQ&t=5s"
          />
          <GridItem
            title="Juegos par Programar"
            thumbnail={JuegosParaProgramar}
            href="https://www.youtube.com/watch?v=DOAEoaSS6W8"
          />
          <GridItem
            title="Genera Cualquier Imagen"
            thumbnail={BoludeandoDalle2}
            href="https://www.youtube.com/watch?v=qZIL8m2FI4s&t=54s"
          />
          <GridItem
            title="Midjourney V4"
            thumbnail={Midjourneyv4}
            href="https://www.youtube.com/watch?v=LizsBLUDQ8k&t=328s"
          />
          <GridItem
            title="Readme Para Github"
            thumbnail={ReadmeGithub}
            href="https://www.youtube.com/watch?v=TjzeV7slTOc"
          />
          <GridItem
            title="Dilemas en Programación"
            thumbnail={DilemasEnProgramacion}
            href="https://www.youtube.com/watch?v=s_nf-m2KAPc"
          />
          <GridItem
            title="GPT 3.5 y Supadatabe"
            thumbnail={GptCHATYSupabase}
            href="https://www.youtube.com/watch?v=-q7AxFkNCjQ"
          />
        </SimpleGrid>
      </Section>


    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
