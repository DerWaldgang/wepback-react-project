import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {

    const {t} = useTranslation('about')

    return <div>
        {t('About')}
    </div>
}

export default AboutPage