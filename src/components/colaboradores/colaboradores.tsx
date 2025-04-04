import { Container, Row, Col } from "react-bootstrap";

const colaboradores = () => {
  return (
    <Container fluid className="px-0">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="text-center">
          <svg
            viewBox="0 0 300 100"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '30%',
              height: 'auto',
              maxWidth: '600px',
              display: 'block',
              margin: '0 auto'
            }}
          >
            <defs>
              <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#251941" />
                <stop offset="100%" stopColor="#BF2792" />
              </linearGradient>
              <filter id="leafShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="2"
                  dy="2"
                  stdDeviation="1"
                  floodColor="#2E7D32"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            <path
              d="M30,50 C15,40 5,20 10,10 C20,5 25,30 30,50 C35,30 40,5 50,10 C55,20 45,40 30,50 Z"
              fill="url(#leafGradient)"
              stroke="#1B5E20"
              strokeWidth="0.8"
              filter="url(#leafShadow)"
              fillOpacity="0.9"
            />
            <path
              d="M20,15 L30,25 M25,10 L35,20 M15,25 L25,35 M25,40 L35,50"
              stroke="#1B5E20"
              strokeWidth="0.3"
              strokeLinecap="round"
            />
            <text
              x="150"
              y="55"
              fontFamily="'Arial', sans-serif"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
              fill="#FFFFFF"
              strokeWidth="0.5"
              letterSpacing="1px"
            >
              Colaboradores
            </text>
            <path
              d="M270,50 C285,40 295,20 290,10 C280,5 275,30 270,50 C265,30 260,5 250,10 C245,20 255,40 270,50 Z"
              fill="url(#leafGradient)"
              stroke="#1B5E20"
              strokeWidth="0.8"
              filter="url(#leafShadow)"
              fillOpacity="0.9"
            />
            <path
              d="M280,15 L270,25 M275,10 L265,20 M285,25 L275,35 M275,40 L265,50"
              stroke="#1B5E20"
              strokeWidth="0.3"
              strokeLinecap="round"
            />
          </svg>
        </Col>
      </Row>
    </Container>
  );
};

export default colaboradores;