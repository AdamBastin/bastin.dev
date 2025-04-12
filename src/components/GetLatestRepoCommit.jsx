import { useState, useEffect } from 'react';

const LatestCommitFetcher = () => {
    const [commit, setCommit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [repo, setRepo] = useState('AdamBastin/Bastin.dev'); // Repo to fetch

    const fetchLatestCommit = async (repository) => {
        try {
            setLoading(true);
            setError(null);
            setCommit(null); // Clear previous commit
            const [owner, repoName] = repository.split('/'); // Split "owner/repo"
            if (!owner || !repoName) {
                throw new Error('Invalid repository format. Use "owner/repo".');
            }

            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repoName}/commits?per_page=1`,
                {
                    headers: {
                        Accept: 'application/vnd.github+json',
                    },
                }
            );

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Repository not found');
                }
                throw new Error('Failed to fetch commit');
            }

            const data = await response.json();
            if (data.length === 0) {
                throw new Error('No commits found in this repository');
            }

            setCommit(data[0]); // Latest commit is first
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch commit on mount and when repo changes
    useEffect(() => {
        if (repo) {
            fetchLatestCommit(repo);
        }
    }, [repo]);

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-4">Latest GitHub Commit</h2>

            {/* Error message */}
            {error && <div className="text-center text-red-500 mb-4">{error}</div>}

            {/* Loading state */}
            {loading && <div className="text-center text-gray-500">Loading...</div>}

            {/* Commit details */}
            {commit && !loading && (
                <div className="">
                    <h3 className="text-xl font-semibold mb-2">
                        Latest Commit: {commit.commit.message}
                    </h3>
                    <p>
                        <strong>Author:</strong> {commit.commit.author.name}
                    </p>
                    <p>
                        <strong>Date:</strong>{' '}
                        {new Date(commit.commit.author.date).toLocaleString()}
                    </p>
                    <p>
                        <strong>SHA:</strong> {commit.sha.slice(0, 7)}
                    </p>
                    <a
                        href={commit.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View on GitHub
                    </a>
                </div>
            )}
        </div>
    );
};

export default LatestCommitFetcher;