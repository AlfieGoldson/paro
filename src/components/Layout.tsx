import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from '../styles/Layout.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface Props {}

export function Layout({ children }: PropsWithChildren<Props>) {
	const router = useRouter();

	return (
		<div className={styles.pageContainer}>
			<Header />
			<motion.div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimate'
				variants={{
					pageInitial: {
						opacity: 0,
					},
					pageAnimate: {
						opacity: 1,
					},
				}}
			>
				{children}
			</motion.div>
			<Footer />
		</div>
	);
}
