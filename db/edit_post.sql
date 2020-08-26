UPDATE posts SET (title, img, content ) = ($2, $3, $4)
 WHERE post_id = $1