import {ICategory} from 'boundless-api-client';
import {apiClient, revalidate} from '@/lib/api';
import Link from 'next/link';

export default async function CategoriesMenu() {
	const categories = await fetchCategoriesMenu();

	return (
		<div className={'container mb-4'}>
			<ul className={'list-unstyled d-flex flex-wrap  border-top border-bottom py-3 m-0'}
					style={{gap: '15px'}}
			>
				{categories.map(({category_id, title, url_key}) =>
					<li key={category_id}>
						<Link style={{color:'#15803d', background:'#f0fdf4', textDecoration:'none', padding:'.5rem 1rem', borderRadius:'.5rem', border:'1px solid #15803d'}} href={`/collections/${url_key || category_id}`} className={'fs-4 content-change'}>{title}</Link>
					</li>
				)}
				</ul>
		</div>
	);
}

const fetchCategoriesMenu = async (): Promise<ICategory[]> => {
	return apiClient.catalog.getCategoryTree({
		menu: 'category'
	}, {
		next: {
			revalidate,
			tags: ['categories']
		}
	});
};
