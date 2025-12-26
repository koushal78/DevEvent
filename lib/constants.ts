interface Props{
    title:string,
    image:string,
    slug:string,
    location:string,
    date:string,
    time:string

}

export const events: Props[] = [
    {
        title: 'Tech Conference 2026',
        image: '/images/event1.png',
        slug: 'tech-conference-2026',
        location: 'San Francisco, CA',
        date: '2026-01-15',
        time: '9:00 AM'
    },
    {
        title: 'AI Summit',
        image: '/images/event2.png',
        slug: 'ai-summit',
        location: 'New York, NY',
        date: '2026-02-20',
        time: '10:00 AM'
    },
    {
        title: 'Web Development Workshop',
        image: '/images/event3.png',
        slug: 'web-dev-workshop',
        location: 'Austin, TX',
        date: '2026-03-10',
        time: '2:00 PM'
    },
    {
        title: 'Data Science Bootcamp',
        image: '/images/event4.png',
        slug: 'data-science-bootcamp',
        location: 'Seattle, WA',
        date: '2026-04-05',
        time: '8:00 AM'
    },
    {
        title: 'Cybersecurity Conference',
        image: '/images/event5.png',
        slug: 'cybersecurity-conference',
        location: 'Chicago, IL',
        date: '2026-05-18',
        time: '11:00 AM'
    },
    {
        title: 'Mobile App Expo',
        image: '/images/event6.png',
        slug: 'mobile-app-expo',
        location: 'Los Angeles, CA',
        date: '2026-06-22',
        time: '1:00 PM'
    },
    {
        title: 'Full Stack Developer Meetup',
        image: '/images/event-full.png',
        slug: 'full-stack-meetup',
        location: 'Boston, MA',
        date: '2026-07-14',
        time: '6:00 PM'
    }
]