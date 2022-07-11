import './AboutProject.css'

function AboutProject() {

  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__title' name='aboutproject'>О проекте</h2>
      <div className='aboutproject__text'>
        <div className='aboutproject__container'>
          <h3 className='aboutproject__title-description'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutproject__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutproject__container'>
          <h3 className='aboutproject__title-description'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutproject__stages'>
        <div className='aboutproject__stage-one'>
          <p className='aboutproject__paragraph-title'>1 неделя</p>
          <p className='aboutproject__paragraph-title-item'>4 недели</p>

        </div>
        <div className='aboutproject__stage-one'>
          <p className='aboutproject__paragraph-description'>Back-end</p>
          <p className='aboutproject__paragraph-description-item'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;