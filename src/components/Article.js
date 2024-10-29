function Article({ title, date = "January 1, 1970", preview, minutes}){
    const tea = '☕️'
    const bento = '🍱'
    const tcount = Math.round(minutes / 5)
    const bcount = Math.round(minutes / 10)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {minutes < 30
                    ? `${tea.repeat(tcount)} ${minutes} min read`
                    : `${bento.repeat(bcount)} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article