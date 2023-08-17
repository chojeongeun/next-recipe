import Link from 'next/link';
import styles from './Title.module.scss';
import clsx from 'clsx';

function Title({ children, url, style, className }) {
	return (
		<h1
			className={clsx(styles.tit, className)}
			//url속성 유무로 자식에 링크가 있는지 파악
			//만약 자식으로 링크가 있으면 상위요소인 h1엘리먼트에는 transition속성 제거, 자식으로 링크가 없으면 transition속성 추가
			style={url ? style : { ...style, transitionDuration: '0.5s' }}
		>
			{url ? (
				//어차피 링크가 있다면 transition이 적용되어야하므로 해당 속성 추가
				<Link href={url} style={{ transtitionDuration: '0.5s' }}>
					{' '}
					{children}
				</Link>
			) : (
				children
			)}
		</h1>
	);
}

export default Title;
