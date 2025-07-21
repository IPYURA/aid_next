import { supabase } from '@/lib/supabaseClient';
import StockTable from './StockTable';

async function Page() {
    const { data, error } = await supabase.from('Tech_Stocks').select('*');

    if (error) {
        console.error('Supabase fetch error:', error.message);
        return <p>데이터를 불러오지 못했습니다.</p>;
    }
    return <StockTable data={data} />; // 데이터가 props로 즉시 전달됨
}
export default Page;
