
function App() {
    return (
        <div>
            {/* <CardWrapper innerComponent={<TextComponent />} /> */}

            <CardWrapper>
                hello
            </CardWrapper>
        </div>
    )
    
}

function CardWrapper({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

// function CardWrapper({innerComponent}) {
//     return (
//         <div>
//             {innerComponent}
//         </div>
//     )
// }

// function TextComponent() {
//     return (
//         <div>
//             hi there
//         </div>
//     )
// }

export default App