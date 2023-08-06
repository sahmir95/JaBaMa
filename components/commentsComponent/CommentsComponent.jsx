
export const CommentsComponent = ({comments}) => {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <div>
                        <div>
                            <div><img src="/images/smile-logo.png"/></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>{comment.commenter}</div>
                    </div>
                )
            })}
        </div>
    );
};

