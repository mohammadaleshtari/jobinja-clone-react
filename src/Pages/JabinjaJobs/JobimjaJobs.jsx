const JabinjaJobs = () => {
    const jobs = [
        { id: 1, title: "توسعه‌دهنده فرانت‌اند", location: "ریموت", type: "تمام وقت" },
        { id: 2, title: "توسعه‌دهنده بک‌اند", location: "تهران", type: "پاره وقت" },
        { id: 3, title: "طراح UI/UX", location: "مشهد", type: "قراردادی" },
    ];

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">جستجوی مشاغل</h1>
            {jobs.map((job) => (
                <div key={job.id} className="mb-3 p-4 border rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-gray-600">{job.location} - {job.type}</p>
                </div>
            ))}
        </div>
    );
};

export default JabinjaJobs;
