import "./portfoliolist.scss"

export default function PortfolioList({title, active, setSelected, id}) {
    return (
        // if active then its portfolioList active else only portfoliolist 
        <div className={active ? "portfolioList active": "portfolioList"} 
        // onclick selects items title list with id
        onClick={()=> setSelected(id)}>
            {title}
         
            
        </div>
    )
}
