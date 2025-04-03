import Header from "./header"
type Props= {
    children: React.ReactNode;
};


const routes =[
    {
        href: '/Home',
        text: 'Home',
    },
   
];

function Template({ children }: Props) {
    return (
        
      <div>
        <Header title="" links={routes} />
        <main>{children}</main> {/* Utiliza main para el contenido principal */}
      </div>
    );
  }


export default Template;