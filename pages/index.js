import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub , IoLogoLinkedin, IoOpenSharp, IoLogoYoutube} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Me gusta poner en practica lo que aprendo
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fabian Martinez
          </Heading>
          <p>El unico limite es tu imaginación</p>
          <p>Artist / Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/fabian.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Fabo
        </Heading>
        <Paragraph>
          No sé qué podré parecerle yo al mundo, pero tengo para mí
          que no he sido sino un muchacho que juega a la orilla del mar, que se distrae de cuando en cuando
          al encontrar un guijarro más liso o una concha más bella que las habituales, 
          mientras el gran océano de la verdad
          se extendía ante mí aún por descubrir. 
          {' '}
           Mi resumen 
          <NextLink href="https://fabian-martinez1.github.io/Resume/" passHref>
            <Link target="_blank"> CV</Link>
          </NextLink>.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Proyectos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Historial Academico
        </Heading>
        <BioSection>
          <BioYear>2014-2020</BioYear>
          <NextLink href="https://drive.google.com/file/d/1MSO9HWIgASFo074WhQ75-qYPkP1faJSX/view" passHref>
            <Link target="_blank">Tecnico </Link>
          </NextLink>
          Electronico, Albert Thomas Argentina
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          <NextLink href="https://drive.google.com/file/d/1Tty9Ge4vC2LeI_gsncEiXDlWJ4HcQx84/view" passHref>
            <Link target="_blank">Practicas  </Link>
          </NextLink>
          profecionalizantes con Arduino
        </BioSection>
        <BioSection>
          <BioYear>2020 al presente</BioYear>
          Analista Programador Universitario, UNLP
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          <NextLink href="https://drive.google.com/file/d/1NokD-6nkzC9GgG6-SkTEzywsScHAxPry/view" passHref>
            <Link target="_blank">Participación </Link>
          </NextLink>
           en Hackaton Space-App
        </BioSection>
        <BioSection>
          <BioYear>2022-2023</BioYear>
          <NextLink href="https://drive.google.com/file/d/13N7ZmMguNqPJLLpwaV3G8s51MTcU2Ero/view" passHref>
            <Link target="_blank">Tutor </Link>
          </NextLink>
           de Matematicas, UNLP Argentina
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Basket, Skate, Tenis de Mesa, Dibujar y todo lo que sea programar.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Mis redes
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Fabian-Martinez1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @fabian-martinez1
              </Button>

            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/faboart_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @faboart_
              </Button>
            </Link>
          </ListItem>
        
        <ListItem>
            <Link href="https://www.instagram.com/fabianm__11/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @fabianm__11
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/logos_fabo/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @logos_fabo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/fabian-martinez-rincon/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @fabian-martinez-rincon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://opensea.io/Faboart" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoOpenSharp />}
              >
                @faboart-nft
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/channel/UC9LoqsWsp3E6ymT1j1JLC4Q" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoYoutube />}
              >
                @fabocod
              </Button>
            </Link>
          </ListItem>
          </List>
          

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
