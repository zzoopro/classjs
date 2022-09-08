import Component from "../core/Component";

export default class CreateQuiz extends Component {
  setUp() {}
  templete() {
    const {
      quizType: { type },
    } = this.props;
    if (type === "base") {
      return `
      <div class="createBaseQuiz">
      <input data-quiz="1" placeholder="퀴즈 내용"/>
      <input data-answer="1" placeholder="정답"/>
      </div>

    `;
    } else if (type === "line") {
      return `
      <div class="createLineQuiz">
        <div class="createLineQuiz_question">
          <input data-quiz="1" placeholder="1번 퀴즈" />
          <input data-quiz="2" placeholder="2번 퀴즈" />
          <input data-quiz="3" placeholder="3번 퀴즈" />
        </div>
        <div class="createLineQuiz_answer">
          <input data-answer="1" placeholder="1번 정답" />
          <input data-answer="2" placeholder="2번 정답" />
          <input data-answer="3" placeholder="3번 정답" />
        </div>
      </div>
      `;
    } else if (type === "drag") {
      return `
        <div class="createDragQuiz">
          <div class="createDragQuiz_question">
            <input data-quiz="1" placeholder="퀴즈" />
          </div>
          <div class="createLineQuiz_answer">
            <input data-answer="1" placeholder="정답" />
            <input data-answer="2" placeholder="오답" />
            <input data-answer="3" placeholder="오답" />
          </div>
        </div>
      `;
    }
  }
}
