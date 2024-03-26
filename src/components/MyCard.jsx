export default function MyCard(props){

    return <div className={props.className || ''}>
        {props.title && (
            <div className="MyCardTitle">
                <h4>{props.title}</h4>
            </div>
        )}
        <div className="MyCardBody">
            {props.children}
        </div>
    </div>
}
