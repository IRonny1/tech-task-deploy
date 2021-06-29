package com.example.demo3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface CommentsRepository extends JpaRepository<Comments, Long> {

}
