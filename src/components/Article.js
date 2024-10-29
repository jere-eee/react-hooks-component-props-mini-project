function Article({ title, date = "January 1, 1970", preview, minutes}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {minutes < 30
                    ? `${'☕️'.repeat(Math.round(minutes / 5))} ${minutes} min read`
                    : `${'🍱'.repeat(Math.round(minutes / 10))} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article