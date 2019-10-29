<?php
namespace DanielCoderHernandez\Community;

require_once("autoload.php");
require_once(dirname(__DIR__) . "/vendor/autoload.php");

use http\Exception\InvalidArgumentException;
use mysql_xdevapi\Exception;
use Ramsey\Uuid\Uuid;
	/**
 	* cross section of of interaction class
	 *
	 * @author Daniel Hernandez
	 * @version 0.0.1
 	**/

	Class Interaction implements \JsonSerializable {
		use ValidateDate;
		use ValidateUuid;

		/**foreign key
		 * @var Uuid $interactionUserId
		 **/
		private $interactionUserId;

		/**foreign key
		 * @var Uuid $interactionRecipeId
		 **/
		private $interactionRecipeId;

		/**Date and time interaction takes place, in a php datetime object
		 * @var \DateTime $interactionDate
		 **/
		private $interactionDate;

		/**user rating of recipe
		 * @var string $interactionRating
		 **/
		private $interactionRating;

		/**
		 * constructor for interaction
		 *
		 * @param string|Uuid $newInteractionUserId user id of this interaction  or null if new interaction
		 * @param string|Uuid $newInteractionRecipeId recipe id of this interaction or null if new interaction
		 * @param \DateTime|string|null $newInteractionDate date and time of interaction was submitted or null if set to current date and time
		 * @param \int $newInteractionRating rating of interaction
		 * @throws \InvalidArgumentException if data types not Invalid
		 * @throws \RangeException if data values are out of bounds
		 * @throws \TypeError if data violates type hints
		 * @throws \Exception if some other Exception occurs
		 */

		public function __construct($newInteractionUserId, $newInteractionRecipeId, $newInteractionDate, $newInteractionRating = null) {
			try {
				$this->setInteractionUserId($newInteractionUserId);
				$this->setInteractionRecipeId($newInteractionRecipeId);
				$this->setInteractionDate($newInteractionDate);
				$this->setInteractionRating($newInteractionRating);
			}
		}

		/**accessor method for interactionUserId
		 *@return Uuid value of interactionUserId
		 **/
		public function getInteractionUserId(): Uuid {
			return ($this->interactionUserId);
		}

		/**
		 * mutator method for interactionUserId
		 * @param uuid | string $newInteractionUserId value of new interaction user id
		 * @throws \RangeException if the $interactionUserId is not positive
		 * @throws \TypeError if $interactionUserId is not positive
		 * */

		public function setInteractionUserId($newInteractionUserId): void {
			try {
				$uuid = self::validateUuid($newInteractionUserId);
			} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception){
				$exceptionType = get_class($exception);
				throw(new $exceptionType($exception->getMessage(), 0, $exception));
			}

		//convert and store interactionUserId
		$this->interactionUserId = $uuid;

		}

		/**
		 * accessor method for interactionRecipeId
		 * @returns Uuid value of interactionRecipeId
		 */

		public function getInteractionRecipeId(): Uuid {
			return ($this->interactionRecipeId);
		}

		/**
		 * mutator method for interactionRecipeId
		 * @param uuid | string $newInteractionRecipeId value of new interaction user id
		 * @throws \RangeException if the $interactionRecipeId is not positive
		 * @throws \TypeError if $interactionRecipeId is not positive
		 * */

		public function setInteractionRecipeId($newInteractionRecipeId): void {
			try {
				$uuid = self::validateUuid($newInteractionRecipeId);
			} catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception){
				$exceptionType = get_class($exception);
				throw(new $exceptionType($exception->getMessage(), 0, $exception));
			}

			//convert and store interactionRecipeId
			$this->interactionRecipeId = $uuid;

		}
		/**
		 * accessor method for interaction date
		 *
		 * @return \DateTime value of interaction date
		 */

		public function getInteractionDate() : \DateTime {
			return($this->interactionDate);
		}

	/**
	 *mutator method for interaction date
	 *
	 * @param \DateTime|string|null $newInteractionDate interaction date as  a datetime object or string ( or null to load to current)
	 * @throws \InvalidArgumentException if $newInteractionDate is not a valid object or string
	 * @throws \RangeException if $newInteractionDate is a date that does not exist
	 */

		public function setInteractionDate($newInteractionDate = null) : void {
			//base case: if the date is null,  use the current date and time 
			if($newInteractionDate === null) {
				$this->interactionDate = new \DateTime();
				return;
			}
			//store the interaction date using the ValidateDate trait
			try {
						$newInteractionDate = self::validateDateTime($newInteractionDate);
			} catch(\InvalidArgumentException | \RangeException $exception) {
						$exceptionType =get_class($exception);
						throw (new $exceptionType($exception->getMessage(), 0, $exception));
			}
			$this->interactionDate = $newInteractionDate;
		}

		/**
		 * accessor method for interaction rating
		 *
		 * @return int value of interaction rating
		 */

		public function getInteractionRating() : int {
			return($this->interactionRating);
		}

		/**
		 * mutator method for interaction rating
		 *
		 * @param integer $newInteractionRating new value of interaction rating
		 * @throws \InvalidArgumentException if $newInteractionRating is not a integer or insecure
		 * @throws \TypeError if $newInteractionRating is not a integer
		 *
		 **/

		public function setInteractionRating(int $newInteractionRating) : void {
			//verifies int interaction rating is secure
			$newInteractionRating = trim($newInteractionRating);
			$newInteractionRating = filter_var($newInteractionRating, filter_has_var());
			if(empty($newInteractionRating) === true) {
				throw(new \InvalidArgumentException("rating is empty or insecure"));
			}

			//store the interaction rating
			$this->interactionRating = $newInteractionRating;

		}
	}