import { classNames } from 'shared/lib/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

function Loader ({ className }: LoaderProps) {
    return <div className={classNames('wrapper', {}, [className]) }>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
}

export { Loader }
