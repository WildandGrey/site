module Methods
  # NAME: Fetch Article
  # PARAMETERS:
  # => index: Int
  def fetch_article index
    # CONFIG
    article = ""
    # SCRIPT
    data.case_studies.each do |id, case_study|
      if index === case_study._index
        article = case_study
      end
    end
    # RETURN
    article
  end
  # NAME: Fetch Neighboring Articles
  # PARAMETERS:
  # => index: Int
  def fetch_neighbors index
    # CONFIG
    total_articles = data.case_studies.length
    neighbors = []
    # SCRIPT
    if index === 1
      previous_article = fetch_article(total_articles)
      next_article = fetch_article(2)
    elsif index === total_articles
      previous_article = fetch_article(total_articles - 1)
      next_article = fetch_article(1)
    else
      previous_article = fetch_article(index - 1)
      next_article = fetch_article(index + 1)
    end
    neighbors.push(previous_article, next_article)
    # RETURN
    neighbors
  end
end
