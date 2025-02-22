import Paper from '@mui/material/Paper';

interface NewsCardProps {
    events: {
        date: string,
        event: string
    }[];
}

const NewsCard: React.FC<NewsCardProps> = ({ events }) => {
    console.log('events', events)
    return (
        // <Paper elevation={3} className="bg-green-100 p-5 rounded-xl shadow-md">
        <div className="flex flex-col space-y-1">
            <label className="text-xl">
                Recenet News
            </label>
            {EventSource.length == 0 ?
                <>
                    No recent news
                </> :
                <>
                    {events.map(e => (
                        <Paper key={`${e.date}:${e.event}`} className="flex flex-col p-4 rounded-xl space-y-2">
                            <label>
                                {e.date}
                            </label>
                            <label >
                                {e.event}
                            </label>
                        </Paper>)
                    )}
                </>}
        </div>
        // </Paper>
    )
}

export default NewsCard