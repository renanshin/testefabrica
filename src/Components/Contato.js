import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";
import React from "react";

//mudar o data ou remover

const QuizContainer = styled.div`
  padding: 10px 10px 0 10px;
  border: 2px solid #333333;
  box-shadow: -1px 1px #777777, -2px 2px #777777, -4px 3px #777777,
    -6px 4px #777777, -12px 8px #777777;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  margin: 10px 10%;
  transform: rotate(-3deg);
  @media screen and (max-width: 500px) {
    margin: 10px;
    padding: 15px;
    max-width: 350px;
  }
`;

const QuizContainerMiddle = styled.div`
  padding: 10px 10px 0 10px;
  border: 2px solid #333333;
  box-shadow: -1px 1px #777777, -2px 2px #777777, -4px 3px #777777,
    -6px 4px #777777, -12px 8px #777777;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  margin: 10px 10%;
  transform: rotate(3deg);
  @media screen and (max-width: 500px) {
    margin: 10px;
    padding: 15px;
  }
`;

const QuizContainerEnd = styled.div`
  padding: 10px 10px 0 10px;
  border: 2px solid #333333;
  box-shadow: -1px 1px #777777, -2px 2px #777777, -4px 3px #777777,
    -6px 4px #777777, -12px 8px #777777;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  margin: 10px 10%;
  transform: rotate(-3deg);
  @media screen and (max-width: 500px) {
    margin: 10px;
    padding: 15px;
  }
`;

const TimeCards = styled.div`
  display: flex;
  justifycontent: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Contato = () => {
  return (
    <section className="contato" id="nossotime">
      <div
        className="header-contato"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h2>Nosso Time</h2>
      </div>
      <span
        className="dicanossotime"
        style={{ fontSize: "10px", color: "#bbb" }}
      >
        Mexa o celular para ver o efeito
      </span>

      <TimeCards>
        <Tilt>
          <QuizContainer
            style={{ background: "rgba(3, 252, 255, 0.3)", borderRadius: 15 }}
          >
            {/* Shin Card*/}
            <Card sx={{ maxWidth: 345, borderRadius: 15 }}>
              <CardMedia
                component="img"
                alt="Shin"
                height="345"
                image="/team-1.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Nosso CEO ?? o cara m??o na massa. Olha isso: 17 anos na ??rea de
                  tecnologia, foi diretor de T.I, desenvolvedor em mais de 15
                  linguagens, professor, TechLead, t??cnico em eletr??nica, DBA,
                  palestrante, metal??rgico, m??sico multiinstrumentista, bacharel
                  em An??lise de Sistemas e TI, p??s graduado em Gest??o de Equipes
                  e Viabilidade de Projetos, arquiteto certificado AWS, mais de
                  30 certifica????es como ITIL, SCRUM, Qualidade, ISO20000 etc,foi
                  capit??o de futebol, dan??arino e core??grafo, trabalhou no Jap??o
                  aos 16 anos, corredor, extens??o em Psicologia e Seguran??a no
                  Trabalho, instrutor internacional Zumba e tamb??m FitDance,
                  amante de filosofia, analista de processos, organizador de
                  grandes eventos, pai, nadador, fez trabalhos volunt??rios e
                  emergentes. Este ?? um pequeno resumo do nosso grande
                  solucionador de qualquer tipo de problema.
                </Typography>
              </CardContent>
            </Card>
          </QuizContainer>
        </Tilt>

        <Tilt>
          <QuizContainerMiddle
            style={{ background: "rgba(252, 244, 3, 0.3)", borderRadius: 15 }}
          >
            {/* Miyagi Card*/}
            <Card sx={{ maxWidth: 345, borderRadius: 15 }}>
              <CardMedia
                component="img"
                alt="Senhor Miyagi"
                height="345"
                image="/team-2.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sr.Miyagi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Com 70 anos ?? o nosso tesouro com sua vitalidade e disposi????o.
                  23 anos de experi??ncia banc??ria e morou 17 anos no Jap??o. Aos
                  60 anos recebeu uma not??cia tr??gica que 70% das veias do seu
                  cora????o estavam comprometidas, escolheu a vida e mudar de
                  rotina, largando o sedentarismo. Hoje ?? um dos nossos
                  fundadores e estimula qualquer pessoa s?? de olhar sua alegria.
                  Curiosidade: ?? o ??nico do mundo que conseguiu a fa??anha de
                  tornar-se instrutor de Zumba aos 70 anos, consultado pelo
                  suporte esta informa????o.
                </Typography>
              </CardContent>
            </Card>
          </QuizContainerMiddle>
        </Tilt>

        {/* Tati Card*/}
        <Tilt>
          <QuizContainerEnd
            style={{ background: "rgba(252, 3, 219, 0.3)", borderRadius: 10 }}
          >
            <Card sx={{ maxWidth: 345, borderRadius: 15 }}>
              <CardMedia
                component="img"
                alt="Tati Franco"
                height="345"
                image="/team-3.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tati Franco
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experi??ncia em dashboards, finan??as, adm e mkt social, ?? a
                  for??a feminina do nosso time. Ap??s a experi??ncia frustrante de
                  ser consumida pela rotina cruel de um dos seus trabalhos,
                  tomou a decis??o de ajudar a mudar esse cen??rio nas empresas,
                  levando com a gente mais felicidade para as pessoas. Nunca
                  podemos esquecer que empresas s??o pessoas, ent??o trate- as
                  bem, sempre.
                </Typography>
              </CardContent>
            </Card>
          </QuizContainerEnd>
        </Tilt>
      </TimeCards>
    </section>
  );
};

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = React.useRef(null);

  React.useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default Contato;
